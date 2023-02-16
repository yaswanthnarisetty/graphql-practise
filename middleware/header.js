
export default function Header(ctx){

 const sym = Reflect.ownKeys(ctx).find(s => {
    return String(s) === "Symbol(kHeaders)";
  });
  return sym


}