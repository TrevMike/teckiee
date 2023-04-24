import { useDispatch } from "react-redux";
import { contactModalHandler } from "@/redux/ducks/modals";
function ContactUsModal() {
  const dispatch = useDispatch();

  return (
    <div className="w-screen h-screen flex items-center justify-center fixed top-0 left-0 bg-slate-900 bg-opacity-90">
      <section className="w-1/2 h-1/2 z-50 opacity-100 bg-slate-100 rounded-2xl p-8">
        <button onClick={() => dispatch(contactModalHandler())}>exit</button>
      </section>
    </div>
  );
}
export default ContactUsModal;
