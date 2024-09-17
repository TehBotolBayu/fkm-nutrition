import Card from "../Global/Card";

function Page({ kategori, cal }) {
  return (
    <Card options={"bg-primary"}>
      <div className="text-white text-left">
        <p className="my-4">Berat Badan Kamu</p>
        <p className="text-3xl font-bold">{kategori}</p>
        <p className="mt-2">Total Energi yang Kamu Butuhkan</p>
        <p className="font-bold">{cal}</p>
        <p className="mt-2">Berat Badan</p>
        <p className="font-bold">{kategori}</p>
      </div>
    </Card>
  );
}

export default Page;
