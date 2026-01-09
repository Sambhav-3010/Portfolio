import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { TechStack } from "@/components/TechStack"

export default function TechStackPage() {
    return (
        <div className="min-h-screen pt-24 pb-16 px-6">
            <div className="max-w-6xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                </Link>
                <TechStack />
            </div>
        </div>
    )
}
