<script setup lang="ts">
import { supabase } from '~/lib/supabase'

const hasSupabaseCredentials = supabase !== null
</script>

<template>
  <div class="page-shell">
    <a class="skip-link" href="#main-content">Skip to content</a>

    <header class="site-header">
      <a class="wordmark" href="#top" aria-label="Repo Nadi home">
        <span class="wordmark-symbol" aria-hidden="true">n</span>
        <span translate="no">repo nadi</span>
      </a>

      <nav class="main-nav" aria-label="Main navigation">
        <a href="#workflow">Your First Steps</a>
        <a
          href="https://supabase.com/docs/guides/getting-started"
          rel="noopener noreferrer"
          target="_blank"
        >
          Supabase Docs
        </a>
      </nav>

      <p class="connection-status" role="status">
        <span class="status-indicator" :data-ready="hasSupabaseCredentials" aria-hidden="true" />
        {{ hasSupabaseCredentials ? 'Project keys added' : 'Waiting for project keys' }}
      </p>
    </header>

    <main id="main-content">
      <section class="hero" id="top" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow">A Calmer Place to Start</p>
          <h1 id="hero-title">Make Room for the Good Idea.</h1>
          <p class="hero-description">
            Choose a frontend, connect your data when you’re ready, and let your AI coding partner
            help with the rest.
          </p>
          <a class="primary-link" href="#workflow">
            See Your First Steps <span aria-hidden="true">↘</span>
          </a>
        </div>

        <aside class="signal-panel" aria-label="Supabase setup status">
          <div class="signal-heading">
            <span>Backend setup</span>
            <span class="signal-index">01 / 03</span>
          </div>

          <div class="signal-art" aria-hidden="true">
            <span class="signal-orbit signal-orbit-one" />
            <span class="signal-orbit signal-orbit-two" />
            <span class="signal-core" />
            <span class="signal-star">✳</span>
          </div>

          <p class="signal-label">Your data stays yours</p>
          <p class="signal-detail">
            {{
              hasSupabaseCredentials
                ? 'Project keys are in place. Review your policies before adding real data.'
                : 'Add your Supabase project keys to connect this starter.'
            }}
          </p>
        </aside>
      </section>

      <section class="workflow" id="workflow" aria-labelledby="workflow-title">
        <div class="workflow-heading">
          <p class="eyebrow">A Small First Milestone</p>
          <h2 id="workflow-title">Three Good Places to Begin.</h2>
        </div>

        <ol class="step-list">
          <li class="step-row">
            <span class="step-number" aria-hidden="true">01</span>
            <div class="step-copy">
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
          <li class="step-row">
            <span class="step-number" aria-hidden="true">02</span>
            <div class="step-copy">
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
          <li class="step-row">
            <span class="step-number" aria-hidden="true">03</span>
            <div class="step-copy">
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

    <footer class="site-footer">
      <span>Made to be changed.</span>
      <span>Vue starter · Supabase-ready</span>
    </footer>
  </div>
</template>
