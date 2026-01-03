"use client";

export function About() {
    return (
        <section id="about" className="py-32 bg-background flex items-center justify-center">
            <div className="container mx-auto px-6 text-center max-w-4xl">
                <h2 className="text-3xl text-muted-foreground font-light mb-8">About AeroGnix</h2>
                <p className="text-3xl md:text-5xl font-medium leading-tight mb-12 text-foreground">
                    We build the eyes that never blink. <br className="hidden md:block" />
                    <span className="text-muted-foreground">
                        Pioneering the future of autonomous flight for a safer, smarter world.
                    </span>
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-12">
                    <div>
                        <div className="text-4xl font-bold text-foreground mb-2">50+</div>
                        <div className="text-muted-foreground text-sm">Patents Filed</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-foreground mb-2">12</div>
                        <div className="text-muted-foreground text-sm">Countries Active</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-foreground mb-2">15k</div>
                        <div className="text-muted-foreground text-sm">Flight Hours</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-foreground mb-2">0</div>
                        <div className="text-muted-foreground text-sm">Compromises</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
