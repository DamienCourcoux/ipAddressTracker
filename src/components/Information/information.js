import './information.css';

function Information() {
  return (
    <section className="information">
      <ul className="information__list">
        <li className="information__list--item">
          <span className="information__list--item-title">IP Address</span>
          <p className="information__list--item-info">192.212.174.101</p>
        </li>
        <li className="information__list--item">
          <span className="information__list--item-title">Location</span>
          <p className="information__list--item-info">Brooklyn, NY 10001</p>
        </li>
        <li className="information__list--item">
          <span className="information__list--item-title">Timezone</span>
          <p className="information__list--item-info">UTC -05:00</p>
        </li>
        <li className="information__list--item">
          <span className="information__list--item-title">ISP</span>
          <p className="information__list--item-info">SpaceX Starlink</p>
        </li>
      </ul>
    </section>
  );
}

export default Information;
