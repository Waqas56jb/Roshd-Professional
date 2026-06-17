import { useUI } from '../context/UIContext.jsx';

/** Toast — mirrors the original `<div class="toast" id="toast">` + `.show` toggle. */
export function Toast() {
  const { toastMsg, toastShow } = useUI();
  return (
    <div className={`toast${toastShow ? ' show' : ''}`} id="toast">
      {toastMsg}
    </div>
  );
}

export default Toast;
