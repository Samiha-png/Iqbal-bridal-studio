import { useState } from 'react';
import { X, ArrowLeft, Check, Minus, Plus, Trash2 } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export default function CheckoutModal() {
  const { checkoutOpen, setCheckoutOpen, bag, removeFromBag, updateQty, clearBag, setBagOpen } = useStore();
  const [step, setStep] = useState(1); // 1: details, 2: review, 3: success
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', postalCode: '', country: 'Pakistan',
    notes: '',
  });
  const [errors, setErrors] = useState({});
  const [orderNumber, setOrderNumber] = useState('');

  if (!checkoutOpen) return null;

  const closeAll = () => {
    setCheckoutOpen(false);
    setStep(1);
    setErrors({});
  };

  const validateDetails = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (!form.lastName.trim()) e.lastName = 'Required';
    if (!form.email.trim()) e.email = 'Required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.phone.trim()) e.phone = 'Required';
    if (!form.address.trim()) e.address = 'Required';
    if (!form.city.trim()) e.city = 'Required';
    if (!form.country.trim()) e.country = 'Required';
    return e;
  };

  const goToReview = () => {
    const e = validateDetails();
    setErrors(e);
    if (Object.keys(e).length === 0) setStep(2);
  };

  const placeOrder = () => {
    // Demo order number — clearly placeholder
    const num = 'DEMO-' + Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(num);
    setStep(3);
  };

  const finishAndClose = () => {
    clearBag();
    setStep(1);
    setForm({ firstName: '', lastName: '', email: '', phone: '', address: '', city: '', postalCode: '', country: 'Pakistan', notes: '' });
    setCheckoutOpen(false);
    setBagOpen(false);
  };

  const itemCount = bag.reduce((s, i) => s + i.qty, 0);

  return (
    <div className="overlay" style={{ zIndex: 230, alignItems: 'flex-start', paddingTop: '2rem', paddingBottom: '2rem' }} onClick={closeAll}>
      <div
        className="modal"
        style={{ gridTemplateColumns: '1fr', maxWidth: '760px', maxHeight: '92vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={closeAll}><X size={18} /></button>

        {/* HEADER */}
        <div style={{ padding: '2rem 2.5rem 1rem', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p className="eyebrow no-lines" style={{ marginBottom: '0.5rem' }}>
              {step === 1 ? 'Step 1 of 2' : step === 2 ? 'Step 2 of 2' : 'Complete'}
            </p>
            <h2 style={{ fontFamily: 'var(--serif-display)', fontSize: '1.8rem' }}>
              {step === 1 && <>Shipping <em style={{ color: 'var(--mauve)' }}>Details</em></>}
              {step === 2 && <>Review <em style={{ color: 'var(--mauve)' }}>Order</em></>}
              {step === 3 && <>Order <em style={{ color: 'var(--mauve)' }}>Placed</em></>}
            </h2>
          </div>
          {step === 2 && (
            <button className="btn btn-ghost" onClick={() => setStep(1)} style={{ fontSize: '0.68rem' }}>
              <ArrowLeft size={14} /> Back
            </button>
          )}
        </div>

        {/* STEP 1: SHIPPING DETAILS */}
        {step === 1 && (
          <div style={{ padding: '2rem 2.5rem 2.5rem' }}>
            <div className="form-grid">
              <div className={`field ${errors.firstName ? 'error' : ''}`}>
                <label>First Name *</label>
                <input value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} />
                {errors.firstName && <span className="err-msg">{errors.firstName}</span>}
              </div>
              <div className={`field ${errors.lastName ? 'error' : ''}`}>
                <label>Last Name *</label>
                <input value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} />
                {errors.lastName && <span className="err-msg">{errors.lastName}</span>}
              </div>
              <div className={`field ${errors.email ? 'error' : ''}`}>
                <label>Email *</label>
                <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                {errors.email && <span className="err-msg">{errors.email}</span>}
              </div>
              <div className={`field ${errors.phone ? 'error' : ''}`}>
                <label>Phone *</label>
                <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                {errors.phone && <span className="err-msg">{errors.phone}</span>}
              </div>
              <div className={`field full ${errors.address ? 'error' : ''}`}>
                <label>Address *</label>
                <input value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
                {errors.address && <span className="err-msg">{errors.address}</span>}
              </div>
              <div className={`field ${errors.city ? 'error' : ''}`}>
                <label>City *</label>
                <input value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} />
                {errors.city && <span className="err-msg">{errors.city}</span>}
              </div>
              <div className="field">
                <label>Postal Code</label>
                <input value={form.postalCode} onChange={e => setForm({ ...form, postalCode: e.target.value })} />
              </div>
              <div className={`field full ${errors.country ? 'error' : ''}`}>
                <label>Country *</label>
                <input value={form.country} onChange={e => setForm({ ...form, country: e.target.value })} />
                {errors.country && <span className="err-msg">{errors.country}</span>}
              </div>
              <div className="field full">
                <label>Order Notes</label>
                <textarea rows={2} value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} />
              </div>
            </div>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <button className="btn btn-solid" onClick={goToReview} disabled={bag.length === 0}>
                <span>Continue to Review</span>
              </button>
              <p className="form-note">Demo only — no data is sent or stored.</p>
            </div>
          </div>
        )}

        {/* STEP 2: REVIEW */}
        {step === 2 && (
          <div style={{ padding: '2rem 2.5rem 2.5rem' }}>
            <p className="eyebrow no-lines" style={{ marginBottom: '1.2rem' }}>Your Items ({itemCount})</p>
            <div style={{ marginBottom: '2rem' }}>
              {bag.map(item => (
                <div key={item.id} style={{ display: 'flex', gap: '1rem', paddingBottom: '1.2rem', marginBottom: '1.2rem', borderBottom: '1px solid var(--line)', alignItems: 'center' }}>
                  <img src={item.image} alt={item.name} style={{ width: 70, height: 88, objectFit: 'cover' }} />
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: 'var(--serif-display)', fontSize: '1.1rem' }}>{item.name}</p>
                    <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: '0.2rem' }}>{item.category}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '0.6rem' }}>
                      <button onClick={() => updateQty(item.id, item.qty - 1)} style={{ border: '1px solid var(--line)', width: 26, height: 26, display: 'grid', placeItems: 'center' }}><Minus size={12} /></button>
                      <span style={{ fontSize: '0.85rem', minWidth: 20, textAlign: 'center' }}>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)} style={{ border: '1px solid var(--line)', width: 26, height: 26, display: 'grid', placeItems: 'center' }}><Plus size={12} /></button>
                      <button onClick={() => removeFromBag(item.id)} style={{ marginLeft: 'auto', color: 'var(--taupe)' }}><Trash2 size={15} /></button>
                    </div>
                  </div>
                  <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--taupe)', fontSize: '0.85rem', textAlign: 'right', maxWidth: 100 }}>{item.price}</p>
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--cream)', padding: '1.5rem', marginBottom: '2rem' }}>
              <p className="eyebrow no-lines" style={{ marginBottom: '0.8rem' }}>Shipping To</p>
              <p style={{ fontSize: '0.88rem', color: 'var(--ink)', lineHeight: 1.6 }}>
                {form.firstName} {form.lastName}<br />
                {form.address}, {form.city}<br />
                {form.country}<br />
                {form.email} · {form.phone}
              </p>
            </div>

            <div style={{ background: 'var(--ivory)', border: '1px solid var(--gold)', padding: '1.2rem', marginBottom: '2rem', textAlign: 'center' }}>
              <p style={{ fontSize: '0.78rem', color: 'var(--mauve)', fontStyle: 'italic', fontFamily: 'var(--serif)' }}>
                Pricing on request — no payment will be processed. Final quote is provided after a consultation.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-outline" onClick={() => setStep(1)}>
                <ArrowLeft size={14} /> Edit Details
              </button>
              <button className="btn btn-solid" onClick={placeOrder}>
                <span>Place Demo Order</span>
              </button>
            </div>
            <p className="form-note">This is a demo checkout — no real order is placed.</p>
          </div>
        )}

        {/* STEP 3: SUCCESS */}
        {step === 3 && (
          <div style={{ padding: '3rem 2.5rem', textAlign: 'center' }}>
            <div style={{ width: 64, height: 64, border: '1px solid var(--gold)', borderRadius: '50%', display: 'grid', placeItems: 'center', margin: '0 auto 2rem', color: 'var(--gold)' }}>
              <Check size={28} strokeWidth={1.5} />
            </div>
            <h3 style={{ fontFamily: 'var(--serif-display)', fontSize: '1.8rem', marginBottom: '1rem' }}>
              Thank you, <em style={{ color: 'var(--mauve)' }}>{form.firstName}</em>
            </h3>
            <p style={{ color: 'var(--taupe)', fontFamily: 'var(--serif)', fontSize: '1.05rem', fontStyle: 'italic', maxWidth: 480, margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Your demo order <strong style={{ color: 'var(--gold)' }}>{orderNumber}</strong> has been created.
            </p>
            <div style={{ background: 'var(--cream)', padding: '1.2rem 1.5rem', marginBottom: '2rem', maxWidth: 480, margin: '0 auto 2rem' }}>
              <p style={{ fontSize: '0.82rem', color: 'var(--mauve)', lineHeight: 1.7 }}>
                <strong>Demo notice:</strong> This is not a real order. No payment was processed and no data was sent to any server. In production, this would connect to a real backend.
              </p>
            </div>
            <button className="btn btn-solid" onClick={finishAndClose}>
              <span>Continue Shopping</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}