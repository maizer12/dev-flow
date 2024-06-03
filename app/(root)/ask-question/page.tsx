import AskForm from '@/components/Forms/AskForm';
import { getOneUser } from '@/lib/actions/user.action';

const page = async () => {
  const userId = '123e4567-e89b-12d3-a456-426614174000';

  const user = await getOneUser(userId);

  return (
    <>
      <h1 className="h1-bold mb-9 font-inter">Ask a public question</h1>
      <AskForm edit={false} user={JSON.stringify(user)} />
    </>
  );
};

export default page;
