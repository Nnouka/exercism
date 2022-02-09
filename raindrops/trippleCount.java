

        // passing

        Map<Long, Long> leftMap = new HashMap<>();
        Map<Long, Long> rightMap = new HashMap<>();

        for (long item : arr) {
            rightMap.put(item, rightMap.getOrDefault(item, 0L) + 1);
        }

        long count = 0;

        for (int i = 0; i < arr.size(); i++) {
            long midTerm = arr.get(i);
            long c1 = 0, c3 = 0;

            rightMap.put(midTerm, rightMap.getOrDefault(midTerm, 0L) - 1);

            if (leftMap.containsKey(midTerm / r) && midTerm % r == 0) {
                c1 = leftMap.get(midTerm / r);
            }

            if (rightMap.containsKey(midTerm * r)) c3 = rightMap.get(midTerm * r);

            count += c1 * c3;

            leftMap.put(midTerm, leftMap.getOrDefault(midTerm, 0L) + 1);
            
        }
        return count;