import Navbar from "./components/navbar"
import "~/styles/globals.css"

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="en">
		<body>
			<div className="min-h-screen flex flex-col border-y-8 border-primary">
                <Navbar />
                { children }
            </div>
        </body>
    </html>
)

export default RootLayout