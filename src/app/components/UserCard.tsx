import Image from "next/image";

export type UserProps = {
  name: string;
  email: string;
  image: string;
};

type Props = {
  user: UserProps;
};

const UserCard = ({ user }: Props) => {
  return (
    <section>
      <Image
        src={user?.image}
        alt={`${user?.name}'s profile pic`}
        width="200"
        height="200"
      />
      <p>Hello, {user?.name}!</p>
      <p>{user?.email}</p>
    </section>
  );
};

export default UserCard;
