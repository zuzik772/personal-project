import SignOutButton from "../components/SignOutButton";
import UserCard from "../components/UserCard";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <UserCard />
      <SignOutButton />
    </div>
  );
};

export default Dashboard;
