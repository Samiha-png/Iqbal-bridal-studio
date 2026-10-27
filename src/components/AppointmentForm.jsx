import { useState } from 'react';
import { collections } from '../data/collections';

export default function AppointmentForm() {
  const [form, setForm] = useState({ name: '', phone: '', date: '', collection: '', preference: '', notes: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.phone.trim()) e.phone = 'Required';
    if (!form.date) e.date = 'Required';
    if (!form.collection) e.collection = 'Required';
    if (!form.preference) e.preference = 'Required';
    return e;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section appointment-section" id="appointment">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="ornament"><span className="ornament-diamond" /></div>
          <h2 className="section-title">Thank you, <em>{form.name.split(' ')[0]}</em></h2>
          <p style={{ color: 'var(--taupe)', maxWidth: 500, margin: '1.5rem auto' }}>
            This is a demo confirmation only. Your appointment has <strong>not</strong> been sent or booked.
          </p>
          <button className="btn btn-outline" onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', date: '', collection: '', preference: '', notes: '' }); }}>
            Book Another
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="section appointment-section" id="appointment">
      <div className="container" style={{ textAlign: 'center' }}>
        <p className="eyebrow">Book an Appointment</p>
        <h2 className="section-title" style={{ marginTop: '1rem' }}>Begin Your <em>Bridal Journey</em></h2>
        <div className="ornament"><span className="ornament-diamond" /></div>
      </div>

      <div className="appointment-form-wrap">
        <form onSubmit={onSubmit} noValidate>
          <div className="form-grid">
            <div className={`field ${errors.name ? 'error' : ''}`}>
              <label>Full Name *</label>
              <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              {errors.name && <span className="err-msg">{errors.name}</span>}
            </div>
            <div className={`field ${errors.phone ? 'error' : ''}`}>
              <label>Phone Number *</label>
              <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              {errors.phone && <span className="err-msg">{errors.phone}</span>}
            </div>
            <div className={`field ${errors.date ? 'error' : ''}`}>
              <label>Wedding / Event Date *</label>
              <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
              {errors.date && <span className="err-msg">{errors.date}</span>}
            </div>
            <div className={`field ${errors.collection ? 'error' : ''}`}>
              <label>Preferred Collection *</label>
              <select value={form.collection} onChange={e => setForm({ ...form, collection: e.target.value })}>
                <option value="">Select...</option>
                {collections.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
              </select>
              {errors.collection && <span className="err-msg">{errors.collection}</span>}
            </div>
            <div className={`field full ${errors.preference ? 'error' : ''}`}>
              <label>Consultation Preference *</label>
              <select value={form.preference} onChange={e => setForm({ ...form, preference: e.target.value })}>
                <option value="">Select...</option>
                <option>In-Studio Consultation</option>
                <option>Virtual Consultation</option>
                <option>Home Visit</option>
              </select>
              {errors.preference && <span className="err-msg">{errors.preference}</span>}
            </div>
            <div className="field full">
              <label>Additional Notes</label>
              <textarea rows={3} value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} />
            </div>
          </div>
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <button type="submit" className="btn btn-solid"><span>Request Appointment</span></button>
            <p className="form-note">Demo only — no data is sent or stored.</p>
          </div>
        </form>
      </div>
    </section>
  );
}