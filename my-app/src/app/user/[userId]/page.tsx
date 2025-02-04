const UserDetail = async ({
  params,
}: {
  params: Promise<{ userId: string }>;
}) => {
  const userId = (await params).userId;
  return <p>UserID: {userId}</p>;
};
export default UserDetail;
