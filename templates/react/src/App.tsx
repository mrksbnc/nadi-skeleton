import type { ReactElement } from 'react'
import { supabase } from '~/lib/supabase'

export function App(): ReactElement {
  const hasSupabaseCredentials = supabase !== null

  return (
    <div className="page-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Repo Nadi home">
          <span className="wordmark-symbol" aria-hidden="true">
            n
          </span>
          <span translate="no">repo nadi</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#workflow">Your First Steps</a>
          <a
            href="https://supabase.com/docs/guides/getting-started"
            rel="noopener noreferrer"
            target="_blank"
          >
            Supabase Docs
          </a>
        </nav>

        <p className="connection-status" role="status">
          <span
            className="status-indicator"
            data-ready={hasSupabaseCredentials}
            aria-hidden="true"
          />
          {hasSupabaseCredentials ? 'Project keys added' : 'Waiting for project keys'}
        </p>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">A Calmer Place to Start</p>
            <h1 id="hero-title">Make Room for the Good Idea.</h1>
            <p className="hero-description">
              Choose a frontend, connect your data when you’re ready, and let your AI coding partner
              help with the rest.
            </p>
            <a className="primary-link" href="#workflow">
              See Your First Steps <span aria-hidden="true">↘</span>
            </a>
          </div>

          <aside className="signal-panel" aria-label="Supabase setup status">
            <div className="signal-heading">
              <span>Backend setup</span>
              <span className="signal-index">01 / 03</span>
            </div>

            <div className="signal-art" aria-hidden="true">
              <span className="signal-orbit signal-orbit-one" />
              <span className="signal-orbit signal-orbit-two" />
              <span className="signal-core" />
              <span className="signal-star">✳</span>
            </div>

            <p className="signal-label">Your data stays yours</p>
            <p className="signal-detail">
              {hasSupabaseCredentials
                ? 'Project keys are in place. Review your policies before adding real data.'
                : 'Add your Supabase project keys to connect this starter.'}
            </p>
          </aside>
        </section>

        <section className="workflow" id="workflow" aria-labelledby="workflow-title">
          <div className="workflow-heading">
            <p className="eyebrow">A Small First Milestone</p>
            <h2 id="workflow-title">Three Good Places to Begin.</h2>
          </div>

          <ol className="step-list">
            <li className="step-row">
              <span className="step-number" aria-hidden="true">
                01
              </span>
              <div className="step-copy">
                <h3>Choose Your Canvas</h3>
                <p>
                  Start the React or Vue example. Each is a separate app, with the same design
                  foundation.
                </p>
              </div>
              <a href="https://vite.dev/guide/" rel="noopener noreferrer" target="_blank">
                Explore Vite <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li className="step-row">
              <span className="step-number" aria-hidden="true">
                02
              </span>
              <div className="step-copy">
                <h3>Connect Your Backend</h3>
                <p>
                  Copy the example environment file and use a publishable key—never a secret key in
                  the browser.
                </p>
              </div>
              <a
                href="https://supabase.com/docs/guides/getting-started"
                rel="noopener noreferrer"
                target="_blank"
              >
                Read the Supabase Setup Guide <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li className="step-row">
              <span className="step-number" aria-hidden="true">
                03
              </span>
              <div className="step-copy">
                <h3>Build on Solid Ground</h3>
                <p>
                  Database changes live in migrations. Row-level security keeps each person’s data
                  private.
                </p>
              </div>
              <a
                href="https://supabase.com/docs/guides/database/postgres/row-level-security"
                rel="noopener noreferrer"
                target="_blank"
              >
                Read About Row-Level Security <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ol>
        </section>
      </main>

      <footer className="site-footer">
        <span>Made to be changed.</span>
        <span>React starter · Supabase-ready</span>
      </footer>
    </div>
  )
}
