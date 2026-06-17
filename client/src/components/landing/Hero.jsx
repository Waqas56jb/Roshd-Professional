import { useUI } from '../../context/UIContext.jsx';

/** HERO section — ported verbatim from index.html. */
export function Hero() {
  const { openLogin } = useUI();
  return (
    <section className="hero">
      <div className="hero-grid"></div>
      <div className="hero-glow"></div>
      <div className="hero-glow-2"></div>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      <div className="hero-content">
        <div className="hero-left">
          {/* English */}
          <div className="en">
            <div className="hero-eyebrow"><div className="hero-eyebrow-line"></div><span>Training &amp; Consulting</span></div>
            <h1 className="hero-title"><em>Clarity.</em><strong>Insight. Impact.</strong></h1>
            <p className="hero-subtitle">ROSHD Professional delivers data-driven consulting and executive training that transforms how organizations understand and act on customer intelligence.</p>
            <div className="hero-actions">
              <a href="#services" className="btn-primary">Explore Services <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg></a>
              <a href="#" className="btn-ghost" onClick={openLogin}><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg> Client Portal</a>
            </div>
            <div className="hero-stats">
              <div><div className="hero-stat-num">200<span>+</span></div><div className="hero-stat-label">Projects Delivered</div></div>
              <div><div className="hero-stat-num">15<span>+</span></div><div className="hero-stat-label">Industries Served</div></div>
              <div><div className="hero-stat-num">98<span>%</span></div><div className="hero-stat-label">Client Satisfaction</div></div>
            </div>
          </div>
          {/* Arabic */}
          <div className="ar">
            <div className="hero-eyebrow"><div className="hero-eyebrow-line"></div><span>التدريب والاستشارات</span></div>
            <h1 className="hero-title"><em>وضوح.</em><strong>رؤية. تأثير.</strong></h1>
            <p className="hero-subtitle">تقدّم رُشد الاحتراف استشارات قائمة على البيانات وبرامج تدريب تنفيذي تُحوّل فهم المؤسسات لذكاء العملاء إلى قرارات واضحة ونتائج قابلة للقياس.</p>
            <div className="hero-actions">
              <a href="#services" className="btn-primary">استكشف الخدمات <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg></a>
              <a href="#" className="btn-ghost" onClick={openLogin}><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg> بوابة العملاء</a>
            </div>
            <div className="hero-stats">
              <div><div className="hero-stat-num"><span>+</span>200</div><div className="hero-stat-label">مشروع مُنجز</div></div>
              <div><div className="hero-stat-num"><span>+</span>15</div><div className="hero-stat-label">قطاعًا مخدومًا</div></div>
              <div><div className="hero-stat-num">98<span>%</span></div><div className="hero-stat-label">رضا العملاء</div></div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="dashboard-preview">
            <div className="dp-header">
              <div className="dp-dots"><span></span><span></span><span></span></div>
              <div className="dp-title"><span className="en">Insight Engine — Live Dashboard</span><span className="ar">محرك الرؤى — لوحة التحكم المباشرة</span></div>
            </div>
            <div className="dp-kpis">
              <div className="dp-kpi"><div className="dp-kpi-val gold">3.8 (76%)</div><div className="dp-kpi-label"><span className="en">Satisfaction Score</span><span className="ar">درجة الرضا</span></div></div>
              <div className="dp-kpi"><div className="dp-kpi-val">72%</div><div className="dp-kpi-label"><span className="en">Model Power</span><span className="ar">قوة النموذج</span></div></div>
              <div className="dp-kpi"><div className="dp-kpi-val gold"><span className="en">Quality</span><span className="ar">الجودة</span></div><div className="dp-kpi-label"><span className="en">Top Driver</span><span className="ar">المحرك الأول</span></div></div>
            </div>
            <div className="dp-chart">
              <div className="dp-bar-row"><span className="dp-bar-label"><span className="en">Quality</span><span className="ar">الجودة</span></span><div className="dp-bar-track"><div className="dp-bar-fill"></div></div><span className="dp-bar-val">.87</span></div>
              <div className="dp-bar-row"><span className="dp-bar-label"><span className="en">Communication</span><span className="ar">التواصل</span></span><div className="dp-bar-track"><div className="dp-bar-fill"></div></div><span className="dp-bar-val">.72</span></div>
              <div className="dp-bar-row"><span className="dp-bar-label"><span className="en">Price Fairness</span><span className="ar">عدالة السعر</span></span><div className="dp-bar-track"><div className="dp-bar-fill"></div></div><span className="dp-bar-val">.58</span></div>
              <div className="dp-bar-row"><span className="dp-bar-label"><span className="en">Speed</span><span className="ar">السرعة</span></span><div className="dp-bar-track"><div className="dp-bar-fill"></div></div><span className="dp-bar-val">.04</span></div>
            </div>
            <div className="dp-badge"><div className="dp-badge-dot"></div><span className="en">Live · Q2 2026 · All Branches</span><span className="ar">مباشر · الربع الثاني 2026 · جميع الفروع</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
