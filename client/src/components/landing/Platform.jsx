import { useState } from 'react';

/** PLATFORM section with tabbed panels — ported verbatim; switchPlatform → state. */
export function Platform() {
  const [active, setActive] = useState(0);
  return (
    <section className="insight-feature" id="platform">
      <div className="hero-grid"></div>
      <div className="section-inner" style={{ display: 'block', position: 'relative', zIndex: 2 }}>
        <div className="section-tag reveal"><div className="section-tag-line"></div><span className="en">The Platform</span><span className="ar">المنصة</span></div>
        <h2 className="section-title reveal" style={{ color: 'var(--white)' }}><span className="en">Our Intelligence <em>Platforms</em></span><span className="ar">منصاتنا <em>الذكية</em></span></h2>
        <div className="platform-tabs-nav reveal">
          <button className={`platform-tab-btn${active === 0 ? ' active' : ''}`} onClick={() => setActive(0)}><span className="en">CX Intelligence</span><span className="ar">ذكاء تجربة العميل</span></button>
          <button className={`platform-tab-btn${active === 1 ? ' active' : ''}`} onClick={() => setActive(1)}><span className="en">Customer Loyalty</span><span className="ar">ولاء العملاء</span></button>
          <button className={`platform-tab-btn${active === 2 ? ' active' : ''}`} onClick={() => setActive(2)}><span className="en">Performance Management</span><span className="ar">إدارة الأداء</span></button>
        </div>
        <div className={`platform-panel${active === 0 ? ' active' : ''}`} id="plat-0">
          <div className="en">
            <h3>Customer Experience Intelligence Platform</h3>
            <p className="platform-tagline">Most companies measure satisfaction. Very few understand what drives it.</p>
            <p className="platform-transition-label">We move you from:</p>
            <ul className="platform-arrows"><li>Scores → Drivers</li><li>Feedback → Decisions</li><li>Assumptions → Measurable impact</li></ul>
            <p className="platform-section-label">What we deliver:</p>
            <ul className="platform-bullets"><li>Tailored CX measurement design</li><li>Data validation and quality control</li><li>Driver identification using advanced modeling</li><li>Impact quantification (what actually matters)</li><li>Clear action roadmap</li></ul>
            <div className="platform-outcome"><div className="platform-outcome-label">Outcome</div><ul className="platform-outcome-bullets"><li>Focused investments</li><li>Faster improvements</li><li>Proven ROI on CX initiatives</li></ul></div>
          </div>
          <div className="ar">
            <h3>منصة تحليل تجربة العميل</h3>
            <p className="platform-tagline">معظم الشركات تقيس الرضا، لكن القليل يفهم ما الذي يؤثر عليه فعليًا.</p>
            <p className="platform-transition-label">نحن ننقلك من:</p>
            <ul className="platform-arrows"><li>درجات ← محركات</li><li>آراء ← قرارات</li><li>انطباعات ← أثر قابل للقياس</li></ul>
            <p className="platform-section-label">ما نقدمه:</p>
            <ul className="platform-bullets"><li>تصميم قياس مخصص لتجربة العميل</li><li>ضبط جودة البيانات</li><li>تحديد المحركات الحقيقية</li><li>قياس الأثر الفعلي لكل عامل</li><li>خطة عمل واضحة</li></ul>
            <div className="platform-outcome"><div className="platform-outcome-label">النتيجة</div><ul className="platform-outcome-bullets"><li>استثمار دقيق</li><li>تحسين أسرع</li><li>أثر مثبت على رضا العملاء</li></ul></div>
          </div>
        </div>
        <div className={`platform-panel${active === 1 ? ' active' : ''}`} id="plat-1">
          <div className="en">
            <h3>Customer Loyalty Intelligence Platform</h3>
            <p className="platform-tagline">Most companies measure retention and loyalty. Very few understand what actually drives it.</p>
            <p className="platform-transition-label">We move you from:</p>
            <ul className="platform-arrows"><li>Tracking metrics → understanding drivers</li><li>General assumptions → decision clarity</li><li>Activities → measurable impact</li></ul>
            <p className="platform-section-label">What we deliver:</p>
            <ul className="platform-bullets"><li>Tailored loyalty measurement aligned to customer lifecycle</li><li>Data validation and quality control</li><li>Driver identification (what truly influences retention)</li><li>Impact quantification (which factors matter most)</li><li>Clear, actionable insights</li></ul>
            <div className="platform-outcome"><div className="platform-outcome-label">Outcome</div><ul className="platform-outcome-bullets"><li>Focused retention initiatives</li><li>Better allocation of loyalty investments</li><li>Measurable impact on customer retention</li></ul></div>
          </div>
          <div className="ar">
            <h3>منصة تحليل الولاء والاحتفاظ بالعملاء</h3>
            <p className="platform-tagline">معظم الشركات تقيس الولاء والاحتفاظ، لكن القليل يفهم ما الذي يؤثر عليه فعليًا.</p>
            <p className="platform-transition-label">نحن ننقلك من:</p>
            <ul className="platform-arrows"><li>متابعة المؤشرات ← فهم المحركات</li><li>افتراضات عامة ← وضوح في القرار</li><li>أنشطة ← أثر قابل للقياس</li></ul>
            <p className="platform-section-label">ما نقدمه:</p>
            <ul className="platform-bullets"><li>تصميم قياس مخصص للولاء مرتبط بدورة حياة العميل</li><li>ضبط جودة البيانات</li><li>تحديد المحركات الحقيقية للاحتفاظ</li><li>قياس الأثر لكل عامل</li><li>مخرجات واضحة قابلة للتنفيذ</li></ul>
            <div className="platform-outcome"><div className="platform-outcome-label">النتيجة</div><ul className="platform-outcome-bullets"><li>مبادرات احتفاظ أكثر دقة</li><li>توجيه أفضل للاستثمار في الولاء</li><li>أثر قابل للقياس على الاحتفاظ بالعملاء</li></ul></div>
          </div>
        </div>
        <div className={`platform-panel${active === 2 ? ' active' : ''}`} id="plat-2">
          <div className="en">
            <h3>Performance Management Platform</h3>
            <p className="platform-tagline">Most organizations track KPIs. Very few measure performance at the role level.</p>
            <p className="platform-transition-label">We move you from:</p>
            <ul className="platform-arrows"><li>Generic KPIs → role-based performance measurement</li><li>Subjective evaluation → structured assessment</li><li>Reviews → decision-driven performance management</li></ul>
            <p className="platform-section-label">What we deliver:</p>
            <ul className="platform-bullets"><li>Role-based performance framework (objectives &amp; competencies per role)</li><li>Definition of performance weightings (goals vs. competencies)</li><li>Clear targets for each objective and competency</li><li>Measurement logic for each performance element</li><li>Calculation of overall performance score</li><li>Digital management of performance cycles through the platform</li></ul>
            <div className="platform-outcome"><div className="platform-outcome-label">Outcome</div><ul className="platform-outcome-bullets"><li>Objective, role-specific evaluation</li><li>Consistent &amp; measurable scoring</li><li>Structured performance cycles</li><li>System-driven performance decisions</li></ul></div>
          </div>
          <div className="ar">
            <h3>منصة إدارة الأداء</h3>
            <p className="platform-tagline">معظم الشركات تتابع مؤشرات عامة، لكن القليل يقيس الأداء على مستوى الوظيفة.</p>
            <p className="platform-transition-label">نحن ننقلك من:</p>
            <ul className="platform-arrows"><li>مؤشرات عامة ← قياس أداء حسب كل وظيفة</li><li>تقييمات شخصية ← تقييمات منظمة</li><li>مراجعات شكلية ← إدارة أداء قائمة على القرار</li></ul>
            <p className="platform-section-label">ما نقدمه:</p>
            <ul className="platform-bullets"><li>إطار أداء لكل وظيفة (الأهداف والكفاءات لكل دور)</li><li>تحديد أوزان الأداء (نسبة الأهداف مقابل الكفاءات)</li><li>تحديد مستهدفات واضحة لكل عنصر</li><li>تعريف آلية قياس لكل هدف وكفاءة</li><li>احتساب التقييم النهائي للأداء</li><li>إدارة دورة الأداء إلكترونيًا عبر المنصة</li></ul>
            <div className="platform-outcome"><div className="platform-outcome-label">النتيجة</div><ul className="platform-outcome-bullets"><li>تقييم موضوعي ودقيق لكل وظيفة</li><li>نتائج أداء قابلة للقياس والمقارنة</li><li>إدارة منظمة لدورات الأداء</li><li>توجيه قرارات الأداء بشكل منهجي</li></ul></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Platform;
