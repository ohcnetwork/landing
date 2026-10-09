'use client'

import { Check, Copy } from 'lucide-react'
import { useRef, useState } from 'react'
import styles from './build-on-care.module.css'
import { starterPrompt } from './resources'

export function StarterPrompt() {
  const [status, setStatus] = useState<'idle' | 'copied' | 'manual'>('idle')
  const promptRef = useRef<HTMLTextAreaElement>(null)

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(starterPrompt)
      setStatus('copied')
    } catch {
      setStatus('manual')
      promptRef.current?.focus()
      promptRef.current?.select()
    }
  }

  return (
    <div className={styles.promptPanel}>
      <div className={styles.promptHeader}>
        <span className={styles.mono}>YOUR IDEA → A PLAN</span>
        <span className={styles.promptDot} aria-hidden="true" />
      </div>
      <div className={styles.promptBody}>
        <h3>Start a useful conversation.</h3>
        <p>
          Give your coding agent the context it needs. Replace the feature
          description with your idea.
        </p>
        <label htmlFor="starter-prompt" className={styles.mono}>
          STARTER PROMPT
        </label>
        <textarea
          id="starter-prompt"
          ref={promptRef}
          readOnly
          value={starterPrompt}
          className={styles.promptText}
          spellCheck={false}
          aria-describedby="prompt-help"
        />
        <button
          type="button"
          className={styles.copyButton}
          onClick={copyPrompt}
        >
          {status === 'copied' ? (
            <Check size={17} aria-hidden="true" />
          ) : (
            <Copy size={17} aria-hidden="true" />
          )}
          {status === 'copied' ? 'Prompt copied' : 'Copy starter prompt'}
        </button>
        <p
          id="prompt-help"
          className={styles.promptHelp}
          role="status"
          aria-live="polite"
        >
          {status === 'manual'
            ? 'Clipboard unavailable. The prompt is selected above; copy it manually.'
            : status === 'copied'
              ? 'Copied. Paste it into your coding agent and add your feature.'
              : 'Copies text only. Nothing is installed or run.'}
        </p>
      </div>
    </div>
  )
}
