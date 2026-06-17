/** PROCESS section ("How It Works") — ported verbatim from index.html. */
export function Process() {
  return (
    <section className="process">
      <div className="section-inner">
        <div className="section-tag reveal"><div className="section-tag-line"></div><span className="en">How It Works</span><span className="ar">كيف نعمل</span></div>
        <h2 className="section-title reveal"><span className="en">From Data to <em>Decisions</em></span><span className="ar">من البيانات إلى <em>قرارات</em></span></h2>
        <div className="process-steps">
          <div className="process-step reveal"><div className="process-step-num">1</div><div className="process-step-name"><span className="en">Scope</span><span className="ar">تحديد النطاق</span></div><div className="process-step-desc"><span className="en">Define the branch, segment, or service to focus the analysis.</span><span className="ar">نحدّد الفرع أو الشريحة أو الخدمة لتركيز التحليل.</span></div></div>
          <div className="process-step reveal" style={{ transitionDelay: '0.1s' }}><div className="process-step-num">2</div><div className="process-step-name"><span className="en">Model</span><span className="ar">النمذجة</span></div><div className="process-step-desc"><span className="en">We build a robust analytical model to explain what drives outcomes.</span><span className="ar">نبني نموذجًا تحليليًا يفسّر النتائج ويكشف ما يقودها فعليًا.</span></div></div>
          <div className="process-step reveal" style={{ transitionDelay: '0.2s' }}><div className="process-step-num">3</div><div className="process-step-name"><span className="en">Identify Drivers</span><span className="ar">تحديد المحركات</span></div><div className="process-step-desc"><span className="en">Quantify impact and rank the key drivers based on their real influence.</span><span className="ar">نقيس حجم التأثير ونرتّب العوامل حسب تأثيرها الحقيقي.</span></div></div>
          <div className="process-step reveal" style={{ transitionDelay: '0.3s' }}><div className="process-step-num">4</div><div className="process-step-name"><span className="en">Simulate</span><span className="ar">المحاكاة</span></div><div className="process-step-desc"><span className="en">Test improvement scenarios and estimate the expected uplift before acting.</span><span className="ar">نختبر سيناريوهات التحسين ونقدّر الأثر المتوقع قبل التنفيذ.</span></div></div>
          <div className="process-step reveal" style={{ transitionDelay: '0.4s' }}><div className="process-step-num">5</div><div className="process-step-name"><span className="en">Decide</span><span className="ar">اتخاذ القرار</span></div><div className="process-step-desc"><span className="en">Translate insights into clear actions: Do, Optimize, or Stop.</span><span className="ar">قرارات واضحة: نفّذ، حسّن، أو أعِد النظر.</span></div></div>
        </div>
      </div>
    </section>
  );
}

export default Process;
