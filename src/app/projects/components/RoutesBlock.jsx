"use client";
import Link from "next/link";
import React, { useState, useMemo, useCallback } from "react";

/* =========================
   Small reusable primitives
   ========================= */

const C = {
  outerCard:
    "bg-white border border-(--color-border) rounded-md overflow-hidden",
  tableCell: "py-3 px-3 border border-(--color-border)",
  tableCellCenter: "py-3 px-3 text-center border border-(--color-border)",
  headerRow:
    "py-2 px-3 text-center border border-(--color-border) bg-[#E5E5E5]",
  noData: "py-3 px-3 text-center  border border-(--color-border)",
  infoLabel: "col-span-4 bg-[#E5E5E5] p-3",
  infoValue: "col-span-8 p-3 text-sm ",
  gridWrapper: "grid grid-cols-1 md:grid-cols-[5.5fr_5.5fr_1fr] gap-4",
  smallBtn:
    "px-4 py-1.5 border border-emerald-600 text-emerald-600 rounded-full text-sm hover:bg-emerald-50",
};

/* BlockProgress (kept same as before, memoized) */
const BlockProgressInner = ({
  value = 0,
  blocks = 10,
  blockClass = "w-2 h-4",
  filledClass = "bg-[var(--color-orange)]",
  emptyClass = "bg-[var(--color-empty)]",
  gapClass = "gap-[2px]",
}) => {
  const filled = Math.round((Number(value) / 100) * blocks);
  return (
    <div className={`flex items-center ${gapClass} will-change-transform`}>
      <div className="flex">
        {Array.from({ length: blocks }).map((_, i) => (
          <span
            key={i}
            className={`${blockClass} inline-block ${
              i < filled ? filledClass : emptyClass
            } mr-0.5`}
            aria-hidden
          />
        ))}
      </div>
      <div className="ml-2 text-xs  hidden sm:block">{Number(value) ?? 0}</div>
    </div>
  );
};
const BlockProgress = React.memo(
  BlockProgressInner,
  (a, b) => a.value === b.value && a.blocks === b.blocks
);

/* Reusable small components */
const Box = ({ children, className = "" }) => (
  <div className={`${C.outerCard} ${className}`.trim()}>{children}</div>
);

const LabelValue = ({ label, value }) => (
  <>
    <div className={`${C.infoLabel} font-medium`}>{label}</div>
    <div className={C.infoValue}>{value ?? "-"}</div>
  </>
);

const UpdateButton = ({ onClick }) => (
  <div className="flex items-center justify-end">
    <button onClick={onClick} className={C.smallBtn}>
      + Update
    </button>
  </div>
);

const ProgressCell = ({ value, pb }) => (
  <td className={C.tableCell}>
    <BlockProgress value={Number(value ?? 0)} {...pb} />
  </td>
);

/* =========================
   Main RoutesBlock component
   ========================= */
export default function RoutesBlock({ rows = null, initialState = "Gujarat" }) {
  const [activeState, setActiveState] = useState(initialState);
  const [expandedId, setExpandedId] = useState(null);

  const states = useMemo(() => ["Gujarat", "Maharashtra", "Rajasthan"], []);

  const mockRoutes = useMemo(
    () => [
      {
        id: 1,
        state: "Gujarat",
        route: "Ahmedabad - Sanand",
        scope: 200,
        fieldManager: "Rahul Solanki",
        reportingTo: "Sooraj Valand",
        startDate: "08/10/2025",
        endDate: "08/04/2025",
        stats: { td: 50, blowing: 50, muff: 50, pole: 50, stringing: 50 },
        target: { td: 50, blowing: 50, muff: 50, pole: 50, stringing: 50 },
        achieved: { td: 50, blowing: 20, muff: 20, pole: 20, stringing: 20 },
        
      },
      {
        id: 2,
        state: "Gujarat",
        route: "Sanand - Morbi",
        scope: 200,
        fieldManager: "Amit Patel",
        reportingTo: "Ravi Joshi",
        startDate: "08/09/2025",
        endDate: "08/05/2025",
        stats: { td: 40, blowing: 45, muff: 35, pole: 50, stringing: 55 },
        target: { td: 50, blowing: 50, muff: 50, pole: 50, stringing: 50 },
        achieved: { td: 35, blowing: 45, muff: 30, pole: 50, stringing: 40 },
      },
      {
        id: 3,
        state: "Maharashtra",
        route: "Pune - Mumbai",
        scope: 300,
        fieldManager: "Suresh Nair",
        reportingTo: "Kiran Rao",
        startDate: "09/01/2025",
        endDate: "09/20/2025",
        stats: { td: 30, blowing: 70, muff: 55, pole: 35, stringing: 45 },
        target: { td: 60, blowing: 75, muff: 55, pole: 40, stringing: 60 },
        achieved: { td: 30, blowing: 70, muff: 55, pole: 35, stringing: 45 },
      },
    ],
    []
  );

  const data = useMemo(() => {
    if (!rows || !rows.length) return mockRoutes;
    const sample = rows[0];
    const expectedKeys = [
      "id",
      "state",
      "route",
      "scope",
      "stats",
      "target",
      "achieved",
    ];
    const missing = expectedKeys.filter((k) => !(k in sample));
    if (missing.length) {
      console.warn(
        "RoutesBlock: passed `rows` is missing expected keys. Falling back to mockRoutes.\nMissing:",
        missing
      );
      return mockRoutes;
    }
    return rows;
  }, [rows, mockRoutes]);

  const filtered = useMemo(
    () => data.filter((r) => r.state === activeState),
    [data, activeState]
  );

  const countsByState = useMemo(() => {
    const map = {};
    states.forEach((s) => (map[s] = data.filter((r) => r.state === s).length));
    return map;
  }, [data, states]);

  const toggleExpand = useCallback(
    (id) => setExpandedId((prev) => (prev === id ? null : id)),
    []
  );
  const onSelectState = useCallback((s) => {
    setActiveState(s);
    setExpandedId(null);
  }, []);

  const pb = {
    blocks: 10,
    blockClass: "w-2 h-4",
    filledClass: "bg-[var(--color-orange)]",
    emptyClass: "bg-[var(--color-empty)]",
    gapClass: "gap-[2px]",
  };

  return (
    <div className="bg-white border border-(--color-border) rounded-md overflow-hidden">
      {/* Tabs */}
      <div className="px-4 py-3 border-b border-gray-100">
        <ul className="flex gap-4 text-sm overflow-x-auto no-scrollbar pb-4">
          {states.map((s) => (
            <li key={s} className="shrink-0">
              <button
                onClick={() => onSelectState(s)}
                className={`px-2 pb-1 ${
                  activeState === s
                    ? "text-(--color-brand) border-b-2 border-(--color-brand)"
                    : " hover:"
                }`}
              >
                {s} ({countsByState[s] || 0})
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Table */}
      <div className="p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr className={C.headerRow}>
                <th className="py-2 px-3 w-10">#</th>
                <th className="py-2 px-3">Route</th>
                <th className="py-2 px-3 w-36">Route Scope (km)</th>
                <th className="py-2 px-3">T &amp; D</th>
                <th className="py-2 px-3">Blowing</th>
                <th className="py-2 px-3">Muff</th>
                <th className="py-2 px-3">Pole</th>
                <th className="py-2 px-3">Stringing</th>
              </tr>
            </thead>

            <tbody>
              {filtered.length ? (
                filtered.map((r, idx) => (
                  <Row
                    key={r.id}
                    idx={idx}
                    row={r}
                    expanded={expandedId === r.id}
                    onToggle={toggleExpand}
                    pb={pb}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan={8} className={C.noData}>
                    No routes for {activeState}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* =========================
   Row component (refactored)
   ========================= */
const Row = React.memo(
  function Row({ row, idx, expanded, onToggle, pb }) {
    const stats = row?.stats ?? {
      td: 0,
      blowing: 0,
      muff: 0,
      pole: 0,
      stringing: 0,
    };
    const target = row?.target ?? {
      td: "-",
      blowing: "-",
      muff: "-",
      pole: "-",
      stringing: "-",
    };
    const achieved = row?.achieved ?? {
      td: "-",
      blowing: "-",
      muff: "-",
      pole: "-",
      stringing: "-",
    };

    return (
      <>
        {/* MAIN ROW */}
        <tr className="hover:bg-gray-50 transition border border-(--color-border)">
          <td className={C.tableCell}>
            <button
              onClick={() => onToggle(row.id)}
              className="inline-flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-100"
            >
              <span className="font-medium">{idx + 1}</span>
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  expanded ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </td>


          {/* <td className="py-3 px-3  border border-(--color-border)">
            {row.route}
          </td> */}


<td className="py-3 px-3 border border-(--color-border)">
  <Link
    href="/projects/tenders/details"
  >
    {row.route}
  </Link>
</td>



          <td className="py-3 px-3 text-center  border border-(--color-border)">
            {row.scope}
          </td>

          <ProgressCell value={stats.td} pb={pb} />
          <ProgressCell value={stats.blowing} pb={pb} />
          <ProgressCell value={stats.muff} pb={pb} />
          <ProgressCell value={stats.pole} pb={pb} />
          <ProgressCell value={stats.stringing} pb={pb} />
        </tr>

        {/* EXPANDED CARD */}
        {expanded && (
          <tr id={`expanded-${row.id}`}>
            <td colSpan={8} className="p-4 border-b border-(--color-border)">
              <div className="space-y-4">
                {/* GRID: 5.5 + 5.5 + 1 */}
                <div className={C.gridWrapper}>
                  {/* Card 1 */}
                  <div className="bg-white border border-(--color-border) rounded-md overflow-hidden">
                    <div className="grid grid-cols-12 ">
                      <LabelValue
                        label="Field Manager"
                        value={row.fieldManager}
                      />
                      <LabelValue
                        label="Reporting To"
                        value={row.reportingTo}
                      />
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white border border-(--color-border) rounded-md overflow-hidden">
                    <div className="grid grid-cols-12">
                      <LabelValue label="Start Date" value={row.startDate} />
                      <LabelValue label="End Date" value={row.endDate} />
                    </div>
                  </div>

                  {/* Button */}
                  <UpdateButton onClick={() => console.log("update", row.id)} />
                </div>

                {/* TARGET / ACHIEVED TABLE */}
                <Box>
                  <table className="min-w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-50 text-xs">
                        <th className="py-3 px-4 border border-(--color-border)"></th>
                        <th className="py-3 px-4 border border-(--color-border) text-center">
                          T&amp;D
                        </th>
                        <th className="py-3 px-4 border border-(--color-border) text-center">
                          Blowing
                        </th>
                        <th className="py-3 px-4 border border-(--color-border) text-center">
                          Muff
                        </th>
                        <th className="py-3 px-4 border border-(--color-border) text-center">
                          Pole
                        </th>
                        <th className="py-3 px-4 border border-(--color-border) text-center">
                          Stringing
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="bg-green-50 ">
                        <td className="py-3 px-4 border border-(--color-border) font-medium">
                          Target
                        </td>
                        <td className="py-3 px-4 border border-(--color-border) text-center">
                          {target.td}
                        </td>
                        <td className="py-3 px-4 border border-(--color-border) text-center">
                          {target.blowing}
                        </td>
                        <td className="py-3 px-4 border border-(--color-border) text-center">
                          {target.muff}
                        </td>
                        <td className="py-3 px-4 border border-(--color-border) text-center">
                          {target.pole}
                        </td>
                        <td className="py-3 px-4 border border-(--color-border) text-center">
                          {target.stringing}
                        </td>
                      </tr>

                      <tr>
                        <td className="py-3 px-4 border border-(--color-border) font-medium">
                          Achieved
                        </td>
                        <td className="py-3 px-4 border border-(--color-border) text-center">
                          {achieved.td}
                        </td>
                        <td className="py-3 px-4 border border-(--color-border) text-center">
                          {achieved.blowing}
                        </td>
                        <td className="py-3 px-4 border border-(--color-border) text-center">
                          {achieved.muff}
                        </td>
                        <td className="py-3 px-4 border border-(--color-border) text-center">
                          {achieved.pole}
                        </td>
                        <td className="py-3 px-4 border border-(--color-border) text-center">
                          {achieved.stringing}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Box>
              </div>
            </td>
          </tr>
        )}
      </>
    );
  },
  (prev, next) =>
    prev.row === next.row &&
    prev.expanded === next.expanded &&
    prev.idx === next.idx
);
