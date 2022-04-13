import React from "react";
import UsersTable from "../components/UsersTable";
import UsersActions from "../components/UsersActions";

const AdminPanel = () => {
    return <React.Fragment>
        <UsersActions/>
        <UsersTable/>
    </React.Fragment>
};

export default AdminPanel;
