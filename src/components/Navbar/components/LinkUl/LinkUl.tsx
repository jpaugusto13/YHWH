interface LinkUlProps {
  ico: string;
}
const LinkUl = ({ ico }: LinkUlProps) => (
  <div className="flex p-2 rounded-full h-[40px] w-[40px] bg-[#F5F7FA]">
    <img src={`./icos/${ico}.svg`} />
  </div>
);

export default LinkUl;
