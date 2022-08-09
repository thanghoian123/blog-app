import Header from "../components/Header";

function MainLayout({ children }: any) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default MainLayout;
