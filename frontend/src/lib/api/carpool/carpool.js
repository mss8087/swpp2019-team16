import client from '../client';

export function get(id) {
  return client.get(`/api/v1/carpool/${id}`);
}

export function create({ rider_id, from, to, minimumPassenger }) {
  return client.post('/api/v1/carpool_request/create', {
    rider_id: rider_id,
    from_location: from,
    to_location: to,
    minimum_passenger: minimumPassenger,
  });
}

export const del = id => client.delete(`/api/v1/carpool/${id}`);
