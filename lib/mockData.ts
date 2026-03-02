export interface Member {
  id: string;
  name: string;
  avatar: string;
  phone: string;
  role: 'owner' | 'member';
  monthlyLimit?: number;
}

export interface Expense {
  id: string;
  description: string;
  amount: number;
  category: string;
  memberId: string;
  memberName: string;
  date: string;
  aiConfidence: number;
  currency: string;
}

export interface Tracker {
  id: string;
  name: string;
  currency: string;
  monthlyBudget: number;
  members: Member[];
}

export interface CategorySummary {
  name: string;
  amount: number;
  percentage: number;
  color: string;
}

export const categories = [
  { name: 'Food & Drinks', icon: '🍜', color: 'hsl(var(--chart-5))' },
  { name: 'Transport', icon: '🚗', color: 'hsl(var(--chart-2))' },
  { name: 'Shopping', icon: '🛍️', color: 'hsl(var(--chart-3))' },
  { name: 'Bills', icon: '📄', color: 'hsl(var(--chart-4))' },
  { name: 'Entertainment', icon: '🎮', color: 'hsl(var(--chart-1))' },
  { name: 'Health', icon: '💊', color: 'hsl(160, 84%, 39%)' },
  { name: 'Other', icon: '📦', color: 'hsl(var(--muted-foreground))' },
];

export const mockMembers: Member[] = [
  { id: '1', name: 'Andi', avatar: 'A', phone: '+62812345678', role: 'owner', monthlyLimit: 2000000 },
  { id: '2', name: 'Budi', avatar: 'B', phone: '+62823456789', role: 'member', monthlyLimit: 1500000 },
  { id: '3', name: 'Citra', avatar: 'C', phone: '+62834567890', role: 'member', monthlyLimit: 1500000 },
];

export const mockTracker: Tracker = {
  id: 'tracker-1',
  name: 'Keluarga Bahagia',
  currency: 'IDR',
  monthlyBudget: 5000000,
  members: mockMembers,
};

export const mockExpenses: Expense[] = [
  { id: '1', description: 'Ayam Goreng McD', amount: 45000, category: 'Food & Drinks', memberId: '1', memberName: 'Andi', date: '2024-01-15T12:30:00', aiConfidence: 0.95, currency: 'IDR' },
  { id: '2', description: 'Grab ke Kantor', amount: 25000, category: 'Transport', memberId: '2', memberName: 'Budi', date: '2024-01-15T08:00:00', aiConfidence: 0.92, currency: 'IDR' },
  { id: '3', description: 'Beli Baju Anak', amount: 150000, category: 'Shopping', memberId: '3', memberName: 'Citra', date: '2024-01-14T15:45:00', aiConfidence: 0.88, currency: 'IDR' },
  { id: '4', description: 'Listrik Januari', amount: 350000, category: 'Bills', memberId: '1', memberName: 'Andi', date: '2024-01-14T10:00:00', aiConfidence: 0.97, currency: 'IDR' },
  { id: '5', description: 'Nonton Bioskop', amount: 75000, category: 'Entertainment', memberId: '2', memberName: 'Budi', date: '2024-01-13T19:00:00', aiConfidence: 0.91, currency: 'IDR' },
  { id: '6', description: 'Mie Ayam Bakso', amount: 20000, category: 'Food & Drinks', memberId: '3', memberName: 'Citra', date: '2024-01-13T12:00:00', aiConfidence: 0.94, currency: 'IDR' },
  { id: '7', description: 'Bensin Motor', amount: 50000, category: 'Transport', memberId: '1', memberName: 'Andi', date: '2024-01-12T07:30:00', aiConfidence: 0.89, currency: 'IDR' },
  { id: '8', description: 'Obat Flu', amount: 35000, category: 'Health', memberId: '2', memberName: 'Budi', date: '2024-01-12T16:00:00', aiConfidence: 0.86, currency: 'IDR' },
  { id: '9', description: 'Kopi Starbucks', amount: 55000, category: 'Food & Drinks', memberId: '1', memberName: 'Andi', date: '2024-01-11T09:00:00', aiConfidence: 0.93, currency: 'IDR' },
  { id: '10', description: 'Top Up Game', amount: 100000, category: 'Entertainment', memberId: '3', memberName: 'Citra', date: '2024-01-11T20:00:00', aiConfidence: 0.85, currency: 'IDR' },
];

export const formatCurrency = (amount: number, currency: string = 'IDR'): string => {
  if (currency === 'IDR') {
    if (amount >= 1000000) {
      return `Rp ${(amount / 1000000).toFixed(1)}jt`;
    }
    if (amount >= 1000) {
      return `Rp ${(amount / 1000).toFixed(0)}rb`;
    }
    return `Rp ${amount.toLocaleString('id-ID')}`;
  }
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
};

export const formatFullCurrency = (amount: number, currency: string = 'IDR'): string => {
  if (currency === 'IDR') {
    return `Rp ${amount.toLocaleString('id-ID')}`;
  }
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
};

export const getCategorySummary = (expenses: Expense[]): CategorySummary[] => {
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const byCategory: Record<string, number> = {};
  
  expenses.forEach(exp => {
    byCategory[exp.category] = (byCategory[exp.category] || 0) + exp.amount;
  });

  return Object.entries(byCategory)
    .map(([name, amount]) => ({
      name,
      amount,
      percentage: (amount / total) * 100,
      color: categories.find(c => c.name === name)?.color || 'hsl(var(--muted-foreground))',
    }))
    .sort((a, b) => b.amount - a.amount);
};

export const getMemberSpending = (expenses: Expense[], members: Member[]) => {
  const spending: Record<string, number> = {};
  
  expenses.forEach(exp => {
    spending[exp.memberId] = (spending[exp.memberId] || 0) + exp.amount;
  });

  return members.map(member => ({
    ...member,
    spent: spending[member.id] || 0,
    remaining: (member.monthlyLimit || 0) - (spending[member.id] || 0),
    percentage: member.monthlyLimit ? ((spending[member.id] || 0) / member.monthlyLimit) * 100 : 0,
  }));
};

export const getMonthlyTrend = () => {
  return [
    { month: 'Aug', amount: 3200000 },
    { month: 'Sep', amount: 4100000 },
    { month: 'Oct', amount: 3800000 },
    { month: 'Nov', amount: 4500000 },
    { month: 'Dec', amount: 5200000 },
    { month: 'Jan', amount: 905000 },
  ];
};
