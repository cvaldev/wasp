import Link from "next/link";

export function AppLink(props) {
    return (
        <Link {...props} style={{ textDecoration: "none", color: "inherit" }} />
    );
}
