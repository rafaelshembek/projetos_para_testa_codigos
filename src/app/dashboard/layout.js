import SiderBar from "@/components/SiderBar";

export default function LayoutDashboard({ children }) {
    return (
        <main className="flex bg-white h-full">
            <SiderBar />
            {children}
        </main>
    );
}