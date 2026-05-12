"use client";

import * as SimpleIcons from "@icons-pack/react-simple-icons";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { credentialsConfig } from "@/lib/config";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

function issuerIcon(slug?: string) {
  if (!slug) return null;
  const key = "Si" + slug.charAt(0).toUpperCase() + slug.slice(1);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lib = SimpleIcons as Record<string, any>;
  return lib[key] ?? null;
}

export function Credentials() {
  if (credentialsConfig.length === 0) return null;

  return (
    <section
      id="credentials"
      className="relative border-t border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <FadeIn>
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Credentials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Licenses & Certifications.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-lg">
            Verified credentials from Google, Cisco, and Udemy — each one
            clickable to view the original certificate.
          </p>
        </FadeIn>

        <Stagger
          className="mt-12 grid sm:grid-cols-2 gap-4"
          stagger={0.06}
        >
          {credentialsConfig.map((cred) => {
            const Icon = issuerIcon(cred.issuerIcon);
            return (
              <StaggerItem key={cred.id}>
                <a
                  href={cred.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col h-full rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground">
                      {Icon ? (
                        <Icon size={22} color="currentColor" />
                      ) : (
                        <Award className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                        {cred.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {cred.issuer}
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Issued {cred.issuedDate}</span>
                    {cred.credentialId && (
                      <span className="font-mono truncate" title={cred.credentialId}>
                        · {cred.credentialId}
                      </span>
                    )}
                  </div>

                  {cred.skills && cred.skills.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cred.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-[10px] font-medium"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </a>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
