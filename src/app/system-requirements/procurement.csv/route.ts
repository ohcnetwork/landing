import { requirementGroups, specification } from '../requirements'

export const dynamic = 'force-static'

function csvField(value: string) {
  return `"${value.replaceAll('"', '""')}"`
}

export function GET() {
  const rows = [
    [
      'Version',
      'Applicability',
      'Group',
      'Requirement ID',
      'Item',
      'Minimum',
      'Recommended',
      'Scope',
      'Basis',
      'Notes',
      'Supplier offered specification',
      'Compliant yes/no/not applicable',
      'Evidence/deviation',
    ],
    ...requirementGroups.flatMap((group) =>
      group.rows.map((row) => [
        specification.version,
        specification.applicability,
        group.title,
        row.id,
        row.item,
        row.minimum,
        row.recommended,
        group.scope,
        group.basis,
        row.notes ?? '',
        '',
        '',
        '',
      ]),
    ),
  ]
  const csv = `\uFEFF${rows.map((row) => row.map(csvField).join(',')).join('\r\n')}\r\n`

  return new Response(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition':
        'attachment; filename="care-system-requirements-v1.0.csv"',
    },
  })
}
