import { useSelector } from 'react-redux';

import './information.css';

function Information() {
  const ip = useSelector((state) => state.ip);
  const city = useSelector((state) => state.city);
  const postalCode = useSelector((state) => state.postalCode);
  const timezone = useSelector((state) => state.timezone);
  const isp = useSelector((state) => state.isp);

  return (
    <section className="information">
      <ul className="information__list">
        <li className="information__list--item">
          <span className="information__list--item-title">Address IP</span>
          <p className="information__list--item-info">{ ip ? ip : 'En attente...'}</p>
        </li>
        <li className="information__list--item">
          <span className="information__list--item-title">Emplacement</span>
          <p className="information__list--item-info">{ city ? city + ' ' + postalCode : 'En attente...'}</p>
        </li>
        <li className="information__list--item">
          <span className="information__list--item-title">Fuseau horaire</span>
          <p className="information__list--item-info">{ timezone ? 'UTC ' + timezone : 'En attente...'}</p>
        </li>
        <li className="information__list--item">
          <span className="information__list--item-title">FAI</span>
          <p className="information__list--item-info">{ isp ? isp : 'En attente...'}</p>
        </li>
      </ul>
    </section>
  );
}

export default Information;
