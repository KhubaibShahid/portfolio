
export default function Card({children, type} : {children : React.JSX.Element, type: string}) {
  return (
    <div className="flex pt-10 ps-12 w-[100px] h-[100px]">
      <div className="ul">
        <div className="li">
          <div className={`${type}`}>
          {children}
          </div>
        </div>
      </div>
      </div>
  );
}
