import { useSelector } from 'react-redux';
import { ShimmerText } from 'react-shimmer-effects';

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
          <div className="information__list--item-info">{ ip ? ip : <ShimmerText className={'shimmerAnimation'} line={2} gap={10} />}</div>
        </li>
        <li className="information__list--item">
          <span className="information__list--item-title">Emplacement</span>
          <div className="information__list--item-info">{ city ? city + ' ' + postalCode : <ShimmerText className={'shimmerAnimation'} line={2} gap={10} />}</div>
        </li>
        <li className="information__list--item">
          <span className="information__list--item-title">Fuseau horaire</span>
          <div className="information__list--item-info">{ timezone ? 'UTC ' + timezone : <ShimmerText className={'shimmerAnimation'} line={2} gap={10} />}</div>
        </li>
        <li className="information__list--item">
          <span className="information__list--item-title">FAI</span>
          <div className="information__list--item-info">{ isp ? isp : <ShimmerText className={'shimmerAnimation'} line={2} gap={10} />}</div>
        </li>
      </ul>
    </section>
  );
}

export default Information;
