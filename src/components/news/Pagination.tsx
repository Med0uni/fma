'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface PaginationProps {
  currentPage: number
  totalPages: number
  language: string
}

export default function Pagination({
  currentPage,
  totalPages,
  language,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav
      className="flex items-center justify-center gap-1"
      aria-label="Pagination"
    >
      <Link
        href={`/news?page=${currentPage - 1}`}
        className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border ${
          currentPage === 1
            ? 'pointer-events-none opacity-50'
            : 'hover:border-primary hover:text-primary'
        }`}
        aria-disabled={currentPage === 1}
      >
        <span className="sr-only">
          {language === 'en' ? 'Previous page' : 'الصفحة السابقة'}
        </span>
        <ChevronLeft className="h-4 w-4" />
      </Link>

      <div className="flex items-center gap-1">
        {pages.map((page) => (
          <motion.div key={page} whileHover={{ scale: 1.1 }}>
            <Link
              href={`/news?page=${page}`}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border ${
                currentPage === page
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'hover:border-primary hover:text-primary'
              }`}
            >
              {page}
            </Link>
          </motion.div>
        ))}
      </div>

      <Link
        href={`/news?page=${currentPage + 1}`}
        className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border ${
          currentPage === totalPages
            ? 'pointer-events-none opacity-50'
            : 'hover:border-primary hover:text-primary'
        }`}
        aria-disabled={currentPage === totalPages}
      >
        <span className="sr-only">
          {language === 'en' ? 'Next page' : 'الصفحة التالية'}
        </span>
        <ChevronRight className="h-4 w-4" />
      </Link>
    </nav>
  )
}
