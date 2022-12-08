import { Logo } from "@/public/svgs";
import { useState } from "react";
import { Input, Sidebar, Title1, ToolCard } from ".";
import { MdMenu } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { ISidebar, IToolCard } from "@/types";

interface LayoutProps {
  sidebarData: ISidebar[];
  Card?: any;
  CardData?: IToolCard[];
}

const layout = ({ sidebarData, Card, CardData }: LayoutProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="page layout">
      {open ? (
        <MdClear className="sidebarMenu" onClick={() => setOpen(!open)} />
      ) : (
        <MdMenu className="sidebarMenu" onClick={() => setOpen(!open)} />
      )}
      {/* sidebar */}
      <Sidebar data={sidebarData} className={open} />
      {open ? null : (
        <div className="layoutMain">
          <div className={open ? "layoutHeader" : "layoutHeader active"}>
            <Title1 text="This is Title" />
            <Input name="search" varient="search" placeholder="Search here" />
          </div>
          <div className={open ? "layoutContent" : "layoutContent active"}>
            <CardContent Card={Card} data={CardData} />
          </div>
        </div>
      )}
    </div>
  );
};

interface CardContentProps {
  data: IToolCard[];
  Card: any;
}

const CardContent = ({ data, Card }: CardContentProps) => {
  return (
    <div className="card-content">
      {data.map((item, i) => {
        return <Card key={i} data={item} />;
      })}
    </div>
  );
};

export default layout;
