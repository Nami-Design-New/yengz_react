import join from "../../Assets/images/join.png";
import { Link } from "react-router-dom";
export default function JoinYnjz() {
  return (
    <section className="join-ynjz">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 co-12 p-2">
            <div className="content">
              <h2>انضم إلى مجتمع ينجز</h2>
              <p>
                كن جزءًا من شبكة مزدهرة من المحترفين والعملاء. سواء كنت مستقلًا
                تبحث عن فرص جديدة أو شركة تحتاج إلى خبراء مهرة، ينجز يربطك
                بالأشخاص المناسبين لإنجاز العمل.
              </p>
              <Link to="/register">انضم الآن</Link>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-2">
            <div className="img">
              <img src={join} alt="join" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
