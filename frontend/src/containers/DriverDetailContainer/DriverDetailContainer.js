import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { confirmCost } from '../../modules/group';
import { withRouter } from 'react-router-dom';
import DriverDetail from '../../components/DriverDetail'

DriverDetailContainer.propTypes = {};

function DriverDetailContainer({ history }) {
  const dispatch = useDispatch();

  const { user, group } = useSelector(({ user, group }) => ({
    user: user.user,
    group: group.group,
  }));

  const onClickConfirm = useCallback(
    ({ groupId, totalCost }) => {
      console.log(groupId, totalCost)
      dispatch(confirmCost({groupId, totalCost}));
      history.push('/driverfinal');
    }, [dispatch, history],
  );

  if (!user) {
    return <div>we are loading user...</div>;
  }

  if (!group) {
    return <div>Waiting for group to be matched...</div>;
  }
  
  return (
    <DriverDetail
      groupId={group.groupId}
      onClickConfirm={onClickConfirm}
    />
  );
}

export default withRouter(DriverDetailContainer);
