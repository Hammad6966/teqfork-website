export function Footer() {
  return (
    <footer className="border-border/60 mt-12 border-t px-6 py-8 text-xs text-muted-foreground lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <span>© {new Date().getFullYear()} Teqfork. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            data-hover="true"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            data-hover="true"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="#contact"
            data-hover="true"
            className="hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

