interface ProductProps {
  nome: string;
}

export default function Product({ nome }: ProductProps) {
  return (
    <div className="w-[250px] h-[250px] shadow-md rounded-lg p-4 cursor-pointer hover:bg-gray-100 duration-300">
      <img className="" src="blusa.jpeg" />
      <p>{nome}</p>
    </div>
  );
}
