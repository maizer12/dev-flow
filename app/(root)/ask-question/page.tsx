import AskForm from '@/components/Forms/AskForm';

const page = () => {
  const userId = '123e4567-e89b-12d3-a456-426614174000';

  return (
    <>
      <h1 className="h1-bold mb-9 font-inter">Ask a public question</h1>
      <AskForm edit={false} userId={userId} />
    </>
  );
};

export default page;
