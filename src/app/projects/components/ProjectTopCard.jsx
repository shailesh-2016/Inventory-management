'use client';
import React from 'react';
import BlockProgress from './BlockProgress';

export default function ProjectTopCard({ project = {}, progress: progressProp = null }) {
  const p = project ?? {};

  const progressFromProject = typeof p.progress === 'number' ? p.progress : null;

  const avgFromStats = (() => {
    if (!p.stats) return 0;
    const vals = Object.values(p.stats).map((v) => Number(v) || 0);
    if (!vals.length) return 0;
    return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
  })();

  const progress = progressProp ?? progressFromProject ?? avgFromStats ?? 0;

  // ---- common class snippets (DRY)
  const tableBase = 'w-full table-auto bg-white border border-(--color-border) rounded-md shadow-sm border-collapse';
  const theadBase = 'bg-gray-50 border-b border-(--color-border)';
  const thCell = 'px-4 py-4 text-left align-middle border border-(--color-border)';
  const rowBorder = 'border-t border-(--color-border)';
  const cell = 'px-3 py-2 border border-(--color-border)';
  const labelCell = `bg-(--color-sky) ${cell} w-36`;
  const smallTitle = 'text-sm font-semibold mb-3';
  const docsCard = 'w-36 h-24 bg-gray-50 rounded border border-(--color-border) flex flex-col p-3 text-xs shrink-0';

  return (
    <div className="overflow-x-auto">
      {/* Desktop / md+ table (unchanged look) */}
      <table className={`${tableBase} hidden md:table`}>
        <thead className={theadBase}>
          <tr className='bg-white'>
            <th colSpan={2} className={thCell}>
              <div className="flex items-center justify-between gap-4 ">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-(--color-puple) flex items-center justify-center text-white font-semibold" />
                  <div>
                    <div className="text-lg font-semibold text-gray-800">{p.name}</div>
                  </div>
                </div>

                {/* ---------- RESPONSIVE PROGRESS CONTAINER (only changed) ---------- */}
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-between border border-gray-200 rounded-xl p-2 px-4 mx-2 bg-white
                                  w-full md:w-auto max-w-[280px] md:max-w-none"
                  >
                    {/* allow blocks to shrink properly */}
                    <div className="flex gap-[3px] flex-1 min-w-0">
                      <div className="min-w-0">
                        <BlockProgress
                          value={progress}
                          blocks={10}
                          blockClass="w-4 h-5 rounded-sm"
                          filledClass="bg-[var(--color-orange)]"
                          emptyClass="bg-[var(--color-empty)]"
                          gapClass="gap-[3px]"
                          showLabel={false}
                        />
                      </div>
                    </div>

                    <span className="font-medium text-base pr-1 ml-2">{progress}</span>
                  </div>
                </div>
                {/* ------------------------------------------------------------------ */}
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className={rowBorder}>
            <td className={`align-top w-1/2 ${cell} p-4`}>
              <div className={smallTitle}>Project Details</div>

              <table className={`w-full border border-(--color-border) border-collapse text-sm`}>
                <tbody>
                  <tr className="border border-(--color-border)">
                    <td className={labelCell}>Project Head</td>
                    <td className={cell}>{p.head}</td>
                  </tr>
                  <tr className="border border-(--color-border)">
                    <td className={labelCell}>Email</td>
                    <td className={cell}>{p.email}</td>
                  </tr>
                  <tr className="border border-(--color-border)">
                    <td className={labelCell}>Phone No.</td>
                    <td className={`${cell} text-[#007AFF]`}>{p.phone}</td>
                  </tr>
                  <tr className="border border-(--color-border)">
                    <td className={labelCell}>Scope</td>
                    <td className={cell}>{p.scope}</td>
                  </tr>
                </tbody>
              </table>
            </td>

            <td className={`align-top w-1/2 ${cell} p-4`}>
              <div className={smallTitle}>Company Details</div>

              <table className="w-full border border-(--color-border) border-collapse text-sm">
                <tbody>
                  <tr className="border border-(--color-border)">
                    <td className={labelCell}>Company Name</td>
                    <td className={cell}>{p.company?.name}</td>
                  </tr>
                  <tr className="border border-(--color-border)">
                    <td className={labelCell}>Office Address</td>
                    <td className={cell}>{p.company?.address}</td>
                  </tr>
                  <tr className="border border-(--color-border)">
                    <td className={labelCell}>State</td>
                    <td className={cell}>{p.company?.state}</td>
                  </tr>
                  <tr className="border border-(--color-border)">
                    <td className={labelCell}>City</td>
                    <td className={cell}>{p.company?.city}</td>
                  </tr>
                  <tr className="border border-(--color-border)">
                    <td className={labelCell}>Pincode</td>
                    <td className={cell}>{p.company?.pincode}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr className={rowBorder}>
            <td className={`align-top w-1/2 ${cell} p-4`}>
              <div className={smallTitle}>Project Docs</div>

              <div className="flex gap-3 overflow-x-auto">
                {(p.docs || []).map((d, i) => (
                  <div key={i} className={docsCard}>
                    <div className="font-medium">Reference doc</div>
                    <div className="text-xs mt-auto">24/05/2025</div>
                  </div>
                ))}
              </div>
            </td>

            <td className={`align-top w-1/2 ${cell} p-4`}>
              <div className={smallTitle}>Scope Targets</div>

              <table className="w-full border border-(--color-border) border-collapse text-sm">
                <tbody>
                  {[
                    ['T & D', p.stats?.td],
                    ['Blowing', p.stats?.blowing],
                    ['Muff', p.stats?.muff],
                    ['Pole', p.stats?.pole],
                    ['Stringing', p.stats?.stringing],
                  ].map(([label, value], i) => (
                    <tr key={i} className="border border-(--color-border)">
                      <td className={labelCell}>{label}</td>
                      <td className={cell}>
                        <BlockProgress value={value} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      {/* =========================
          MOBILE: exact order requested
          1) Title
          2) Progress
          3) Project Details (table)
          4) Project Docs / desc
          5) Company Details (table)
          6) Scope Targets (table)
         ========================= */}
      <div className="md:hidden space-y-4">
        {/* 1) Title */}
        <div className="bg-white border border-(--color-border) rounded-md p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-(--color-puple) flex items-center justify-center text-white font-semibold" />
            <div>
              <div className="text-base font-semibold">{p.name}</div>
              <div className="text-sm text-gray-500">{p.company?.name}</div>
            </div>
          </div>
        </div>

        {/* 2) Progress */}
        <div className="bg-white border border-(--color-border) rounded-md p-4 shadow-sm">
          <div className="text-sm font-medium mb-2">Progress</div>
          <div className="flex items-center justify-start gap-3">
            <div className="flex-1 min-w-0">
              <BlockProgress
                value={progress}
                blocks={10}
                // responsive blocks smaller on narrow screens
                blockClass="w-3 h-3 sm:w-3 sm:h-4 md:w-4 md:h-5 rounded-sm"
                filledClass="bg-[var(--color-orange)]"
                emptyClass="bg-[var(--color-empty)]"
                gapClass="gap-2"
                showLabel={false}
              />
            </div>
            <div className="font-medium text-base shrink-0">{progress}</div>
          </div>
        </div>

        {/* 3) Project Details */}
        <div className="bg-white border border-(--color-border) rounded-md p-4 shadow-sm">
          <div className="text-sm font-medium mb-3">Project Details</div>
          <div className="grid grid-cols-1 gap-3 text-sm">
            <div>
              <div className="text-xs text-gray-500">Project Head</div>
              <div className="font-medium">{p.head}</div>
            </div>

            <div>
              <div className="text-xs text-gray-500">Email</div>
              <div className="break-all">{p.email}</div>
            </div>

            <div>
              <div className="text-xs text-gray-500">Phone No.</div>
              <div className="text-[#007AFF]">{p.phone}</div>
            </div>

            <div>
              <div className="text-xs text-gray-500">Scope</div>
              <div className="font-medium">{p.scope}</div>
            </div>
          </div>
        </div>

        {/* 4) Project Docs / Description */}
        <div className="bg-white border border-(--color-border) rounded-md p-4 shadow-sm">
          <div className="text-sm font-medium mb-2">Project Docs</div>
          <div className="flex gap-3 flex-wrap">
            {(p.docs || []).length ? (
              (p.docs || []).map((d, i) => (
                <div key={i} className="w-40 h-20 bg-gray-50 rounded border border-(--color-border) flex flex-col p-3 text-xs">
                  <div className="font-medium truncate">{d.title ?? 'Reference doc'}</div>
                  <div className="text-xs mt-auto">{d.date ?? '24/05/2025'}</div>
                </div>
              ))
            ) : (
              <div className="text-sm text-gray-500">No documents</div>
            )}
          </div>
        </div>

        {/* 5) Company Details */}
        <div className="bg-white border border-(--color-border) rounded-md p-4 shadow-sm">
          <div className="text-sm font-medium mb-3">Company Details</div>
          <div className="grid grid-cols-1 gap-3 text-sm">
            <div>
              <div className="text-xs text-gray-500">Company Name</div>
              <div className="font-medium truncate">{p.company?.name}</div>
            </div>

            <div>
              <div className="text-xs text-gray-500">Office Address</div>
              <div className="truncate">{p.company?.address}</div>
            </div>

            <div className="flex gap-3">
              <div className="flex-1">
                <div className="text-xs text-gray-500">State</div>
                <div>{p.company?.state}</div>
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-500">City</div>
                <div>{p.company?.city}</div>
              </div>
            </div>

            <div>
              <div className="text-xs text-gray-500">Pincode</div>
              <div>{p.company?.pincode}</div>
            </div>
          </div>
        </div>

        {/* 6) Scope Targets */}
        <div className="bg-white border border-(--color-border) rounded-md p-4 shadow-sm">
          <div className="text-sm font-medium mb-3">Scope Targets</div>
          <div className="space-y-3">
            {[
              ['T & D', p.stats?.td],
              ['Blowing', p.stats?.blowing],
              ['Muff', p.stats?.muff],
              ['Pole', p.stats?.pole],
              ['Stringing', p.stats?.stringing],
            ].map(([label, value], i) => (
              <div key={i} className="flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm bg-(--color-sky) px-3 py-1 rounded">{label}</div>
                  <div className="font-medium">{value ?? 0}</div>
                </div>

                <div>
                  <BlockProgress
                    value={value}
                    blocks={10}
                    blockClass="w-3 h-3 rounded-sm"
                    filledClass="bg-[var(--color-orange)]"
                    emptyClass="bg-[var(--color-empty)]"
                    gapClass="gap-2"
                    showLabel={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
