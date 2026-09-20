import Link from "next/link";
import Title from "../../components/Title";

export default function AboutPage() {
    return (
        <div>
            <Title>About Us</Title>
            <nav className="space-x-5 container-custom py-6">
                <Link href={'/about/contact'}>Contact</Link>
                <Link href={'/about/teams'}>Teams</Link>
            </nav>
        </div>
    );
}