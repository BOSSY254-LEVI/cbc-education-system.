import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GraduationCap, ChevronDown, Menu, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-foreground">Nonea</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/curriculum" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Curriculum
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                Resources
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-popover border shadow-lg">
                <DropdownMenuItem>Teacher Guides</DropdownMenuItem>
                <DropdownMenuItem>Parent Resources</DropdownMenuItem>
                <DropdownMenuItem>Student Materials</DropdownMenuItem>
                <DropdownMenuItem>Downloads</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/analytics" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Analytics
            </Link>
            <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About CBE
            </Link>
            <Link to="/support" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Support
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Button variant="outline" size="sm" className="border-border" asChild>
              <Link to="/login">Log In</Link>
            </Button>
            <Button size="sm" className="bg-[hsl(207,90%,54%)] hover:bg-[hsl(207,90%,48%)] text-white" asChild>
              <Link to="/login">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <Link to="/curriculum" className="text-sm font-medium text-foreground hover:text-primary">
                Curriculum
              </Link>
              <Link to="/resources" className="text-sm font-medium text-foreground hover:text-primary">
                Resources
              </Link>
              <Link to="/analytics" className="text-sm font-medium text-foreground hover:text-primary">
                Analytics
              </Link>
              <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary">
                About CBE
              </Link>
              <Link to="/support" className="text-sm font-medium text-foreground hover:text-primary">
                Support
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t">
                <Button variant="outline" asChild>
                  <Link to="/login">Log In</Link>
                </Button>
                <Button asChild>
                  <Link to="/login">Get Started</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
