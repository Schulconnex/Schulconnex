import React, { useEffect } from 'react';
import Root from '@theme-original/Root';
import type { Props } from '@theme/Root';
import { useLocation } from '@docusaurus/router';

const STORAGE_KEY = 'schulconnex.showQualifiedNames';
const HTML_CLASS = 'show-qualified-names';
const TOGGLE_ID = 'qualified-names-toggle';
const CHECKBOX_ID = 'qualified-names-toggle-checkbox';

function readStoredPreference(): boolean {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === null) return false;
    return raw === 'true';
  } catch {
    return false;
  }
}

function writeStoredPreference(value: boolean) {
  try {
    window.localStorage.setItem(STORAGE_KEY, String(value));
  } catch {
    // ignore
  }
}

function setEnabled(enabled: boolean) {
  document.documentElement.classList.toggle(HTML_CLASS, enabled);
}

function normalizeHeaderText(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

function annotateQualifiedNameTables(): boolean {
  const tables = Array.from(document.querySelectorAll<HTMLTableElement>('.theme-doc-markdown table'));
  let found = false;

  for (const table of tables) {
    const headers = Array.from(table.querySelectorAll<HTMLTableCellElement>('thead th'));
    if (headers.length === 0) continue;

    const headerIndex = headers.findIndex((th) => {
      const label = normalizeHeaderText(th.textContent ?? '');
      return label === 'Qualifizierter Name';
    });

    if (headerIndex === -1) continue;

    found = true;
    table.classList.add('qualified-names-table');

    const rows = Array.from(table.querySelectorAll<HTMLTableRowElement>('tr'));
    for (const row of rows) {
      const cells = Array.from(row.children).filter((el) => {
        const tag = el.tagName.toLowerCase();
        return tag === 'td' || tag === 'th';
      }) as Array<HTMLTableCellElement>;

      const cell = cells[headerIndex];
      if (cell) {
        cell.classList.add('qualified-name-col');
      }
    }
  }

  return found;
}

function ensureToggleVisible(shouldShow: boolean) {
  const container = document.querySelector<HTMLElement>('.theme-doc-markdown');
  if (!container) return;

  const existing = document.getElementById(TOGGLE_ID);
  if (!shouldShow) {
    existing?.remove();
    return;
  }

  if (existing) return;

  const wrapper = document.createElement('div');
  wrapper.id = TOGGLE_ID;
  wrapper.className = 'qualified-names-toggle';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = CHECKBOX_ID;

  const label = document.createElement('label');
  label.htmlFor = CHECKBOX_ID;
  label.textContent = 'Qualifizierte Namen anzeigen';

  wrapper.appendChild(checkbox);
  wrapper.appendChild(label);

  container.prepend(wrapper);

  const apply = (value: boolean) => {
    setEnabled(value);
    checkbox.checked = value;
    writeStoredPreference(value);
  };

  const initial = readStoredPreference();
  apply(initial);

  checkbox.addEventListener('change', () => {
    apply(checkbox.checked);
  });
}

export default function RootWrapper(props: Props) {
  const location = useLocation();

  useEffect(() => {
    // Apply preference early on each route change.
    setEnabled(readStoredPreference());

    // Annotate and wire toggle after DOM updates.
    // Run twice to be resilient against async content rendering.
    const run = () => {
      const hasTables = annotateQualifiedNameTables();
      ensureToggleVisible(hasTables);
    };

    run();
    const t = window.setTimeout(run, 50);

    return () => {
      window.clearTimeout(t);
    };
  }, [location.pathname]);

  return <Root {...props} />;
}
