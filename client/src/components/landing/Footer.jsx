import { useUI } from '../../context/UIContext.jsx';

/** FOOTER — ported verbatim from index.html. */
export function Footer() {
  const { openLogin } = useUI();
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/logo.png" alt="ROSHD Professional" />
            <div className="footer-tagline en">Clarity. Insight. Impact.</div>
            <div className="footer-tagline ar">وضوح. رؤية. تأثير.</div>
            <div className="footer-desc en">ROSHD Professional delivers data-driven consulting and executive training that transforms data into clear decisions and measurable results.</div>
            <div className="footer-desc ar">تقدّم رُشد الاحتراف استشارات قائمة على البيانات وبرامج تدريب تنفيذي تُحوّل البيانات إلى قرارات واضحة ونتائج قابلة للقياس.</div>
          </div>
          <div>
            <div className="footer-col-title"><span className="en">Company</span><span className="ar">الشركة</span></div>
            <ul className="footer-links">
              <li><a href="#about"><span className="en">About Us</span><span className="ar">من نحن</span></a></li>
              <li><a href="#services"><span className="en">Services</span><span className="ar">الخدمات</span></a></li>
              <li><a href="#platform"><span className="en">Platform</span><span className="ar">المنصة</span></a></li>
              <li><a href="#contact"><span className="en">Contact</span><span className="ar">تواصل معنا</span></a></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title"><span className="en">Platform</span><span className="ar">المنصة</span></div>
            <ul className="footer-links">
              <li><a href="#" onClick={openLogin}><span className="en">Client Login</span><span className="ar">دخول العملاء</span></a></li>
              <li><a href="#"><span className="en">Executive Dashboard</span><span className="ar">لوحة القيادة التنفيذية</span></a></li>
              <li><a href="#"><span className="en">Analytics Engine</span><span className="ar">محرك التحليلات</span></a></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title"><span className="en">Contact</span><span className="ar">التواصل</span></div>
            <ul className="footer-links">
              <li><a href="mailto:info@roshd-professional.com">info@roshd-professional.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2026 <span>ROSHD Professional</span>. <span className="en">All rights reserved.</span><span className="ar">جميع الحقوق محفوظة.</span></div>
          <div className="footer-copy en">Built with <span>Clarity. Insight. Impact.</span></div>
          <div className="footer-copy ar">بُني بـ <span>وضوح. رؤية. تأثير.</span></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
