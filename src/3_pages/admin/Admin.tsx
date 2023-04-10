import { useState } from 'react';
import Loader from '7_shared/loader/Loader';
import useCheckAdmin from '../../4_widgets/admin/hooks/useCheckAdmin';
import AdminPanel from '4_widgets/admin/AdminPanel';

const Admin = () => {
  const [load, setLoad] = useState(true);

  useCheckAdmin(setLoad);

  if (load) {
    return <Loader />;
  }

  return (
    <div className="container">
      <h2>Admin page</h2>
      <AdminPanel />
    </div>
  );
};

export default Admin;