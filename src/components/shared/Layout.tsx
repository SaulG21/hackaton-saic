export interface LayoutProps{
    children?:React.ReactNode|React.ReactNode[];
    className?:string;
}

export default function Layout(props:LayoutProps){
    return (
        <div className={`h-screen w-full flex justify-center items-center bg-[#FFFFF] ${props.className}`}>
            {props.children}
        </div>
    );
}