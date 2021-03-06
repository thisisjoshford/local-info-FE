import React from 'react';
import { useSelector } from 'react-redux';
import { getTrails } from '../../selectors/selectors';
import styles from './TrailsStyles.css';

const Trails = () => {
  const trails = useSelector(getTrails);

  const trailListings = trails.map((trail, i) => (
    <tr key={i}>
      <td>{trail.length} mi</td>
      <td><a href={trail.trail_url} target="_blank" rel="noreferrer">{trail.name}</a></td>
      <td>{trail.location}</td>
      <td>{trail.conditions}</td>
      <td>{trail.condition_date}</td>
    </tr>
  ));
  return (
    <>
      <table className={styles.Trails}>
        <tr>
          <th>Length</th>
          <th>Name</th>
          <th>Location</th>
          <th>Conditions</th>
          <th>Time Stamp</th>
        </tr>
        { trailListings }
      </table>
    </>
  );
};

export default Trails;
