import AgGridLiveFinance from "../tables/AgGridLiveFinance";

function AgGridLivePage() {
  return (
    <div>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        Live Finance Timeline
      </h1>

      <AgGridLiveFinance />
    </div>
  );
}

export default AgGridLivePage;
