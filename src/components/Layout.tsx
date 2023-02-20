import { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen">{children}</div>
    </>
  );
};
export default Layout;
