/** SERVICES section — ported verbatim from index.html. */
export function Services() {
  return (
    <section className="services" id="services">
      <div className="section-inner">
        <div className="section-tag reveal"><div className="section-tag-line"></div><span className="en">Services</span><span className="ar">الخدمات</span></div>
        <h2 className="section-title reveal"><span className="en">End-to-End <em>Enablement Solutions</em></span><span className="ar">حلول تمكين <em>شاملة ومتكاملة</em></span></h2>
        <p className="section-lead reveal"><span className="en">We provide end-to-end enablement solutions, not fragmented services.</span><span className="ar">نُصمّم وننفّذ حلولًا مترابطة تُغلق الفجوات، بدل تقديم خدمات متفرقة.</span></p>
        <div className="services-grid">
          <div className="service-card reveal">
            <div className="service-icon"><svg width="22" height="22" fill="none" stroke="white" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg></div>
            <div className="service-num">01</div>
            <div className="en"><div className="service-name">Training &amp; Capability Building</div><div className="service-desc">Practical, role-based training linked directly to real outcomes.</div></div>
            <div className="ar"><div className="service-name">التدريب وبناء القدرات</div><div className="service-desc">تدريب عملي مرتبط مباشرة بنتائج واقعية.</div></div>
          </div>
          <div className="service-card reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="service-icon"><svg width="22" height="22" fill="none" stroke="white" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg></div>
            <div className="service-num">02</div>
            <div className="en"><div className="service-name">Consulting &amp; Implementation</div><div className="service-desc">We don't advise—we design and implement working systems.</div></div>
            <div className="ar"><div className="service-name">الاستشارات والتنفيذ</div><div className="service-desc">لا نقدم توصيات فقط، بل نصمم ونطبق أنظمة عمل فعلية.</div></div>
          </div>
          <div className="service-card reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="service-icon"><svg width="22" height="22" fill="none" stroke="white" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M18 20V10M12 20V4M6 20v-6" /></svg></div>
            <div className="service-num">03</div>
            <div className="en"><div className="service-name">Performance &amp; Data Intelligence</div><div className="service-desc">Turning data into clear, measurable decisions.</div></div>
            <div className="ar"><div className="service-name">تحليل الأداء والبيانات</div><div className="service-desc">تحويل البيانات إلى قرارات واضحة وقابلة للقياس.</div></div>
          </div>
          <div className="service-card reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="service-icon"><svg width="22" height="22" fill="none" stroke="white" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg></div>
            <div className="service-num">04</div>
            <div className="en"><div className="service-name">System Enablement</div><div className="service-desc">Ensuring business systems are actually used—not just installed.</div></div>
            <div className="ar"><div className="service-name">تمكين الأنظمة</div><div className="service-desc">ضمان استخدام الأنظمة فعلياً داخل التشغيل، وليس مجرد تركيبها.</div></div>
          </div>
          <div className="service-card reveal" style={{ transitionDelay: '0.4s' }}>
            <div className="service-icon"><svg width="22" height="22" fill="none" stroke="white" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" /></svg></div>
            <div className="service-num">05</div>
            <div className="en"><div className="service-name">Research &amp; Knowledge Solutions</div><div className="service-desc">From academic frameworks to real-world application.</div></div>
            <div className="ar"><div className="service-name">حلول البحث والمعرفة</div><div className="service-desc">ربط المنهج العلمي بالتطبيق العملي.</div></div>
          </div>
        </div>
        <div className="services-footer reveal">
          <div className="en services-footer-text">Our engagement model focuses on one outcome: measurable business impact—not activity.</div>
          <div className="ar services-footer-text">نُصمّم نموذج عملنا لتحقيق نتائج قابلة للقياس—بعيدًا عن مؤشرات النشاط الشكلية.</div>
        </div>
      </div>
    </section>
  );
}

export default Services;
