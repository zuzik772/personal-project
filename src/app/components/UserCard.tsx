import Image from "next/image";

export type UserProps = {
  name: string;
  username?: string;
  email: string;
  image: string;
};

type Props = {
  user: UserProps;
};

const UserCard = ({ user }: Props) => {
  return (
    <section>
      {user?.image && (
        <Image
          src={user?.image}
          alt={`${user?.name}'s profile pic`}
          width="200"
          height="200"
        />
      )}
      <p>Hello, {user?.name || user?.username}!</p>
    </section>
  );
};

export default UserCard;
